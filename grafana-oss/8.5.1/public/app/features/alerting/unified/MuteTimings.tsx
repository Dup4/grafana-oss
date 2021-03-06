import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';

import { Alert, LoadingPlaceholder } from '@grafana/ui';
import { useQueryParams } from 'app/core/hooks/useQueryParams';
import { MuteTimeInterval } from 'app/plugins/datasource/alertmanager/types';

import MuteTimingForm from './components/amroutes/MuteTimingForm';
import { useAlertManagerSourceName } from './hooks/useAlertManagerSourceName';
import { useUnifiedAlertingSelector } from './hooks/useUnifiedAlertingSelector';
import { fetchAlertManagerConfigAction } from './state/actions';
import { initialAsyncRequestState } from './utils/redux';

const MuteTimings = () => {
  const [queryParams] = useQueryParams();
  const dispatch = useDispatch();
  const [alertManagerSourceName] = useAlertManagerSourceName();

  const amConfigs = useUnifiedAlertingSelector((state) => state.amConfigs);

  const fetchConfig = useCallback(() => {
    if (alertManagerSourceName) {
      dispatch(fetchAlertManagerConfigAction(alertManagerSourceName));
    }
  }, [alertManagerSourceName, dispatch]);

  useEffect(() => {
    fetchConfig();
  }, [fetchConfig]);

  const { result, error, loading } =
    (alertManagerSourceName && amConfigs[alertManagerSourceName]) || initialAsyncRequestState;

  const config = result?.alertmanager_config;

  const getMuteTimingByName = useCallback(
    (id: string): MuteTimeInterval | undefined => {
      return config?.mute_time_intervals?.find(({ name }: MuteTimeInterval) => name === id);
    },
    [config]
  );

  return (
    <>
      {loading && <LoadingPlaceholder text="Loading mute timing" />}
      {error && !loading && (
        <Alert severity="error" title={`Error loading Alertmanager config for ${alertManagerSourceName}`}>
          {error.message || 'Unknown error.'}
        </Alert>
      )}
      {result && !error && (
        <Switch>
          <Route exact path="/alerting/routes/mute-timing/new">
            <MuteTimingForm />
          </Route>
          <Route exact path="/alerting/routes/mute-timing/edit">
            {() => {
              if (queryParams['muteName']) {
                const muteTiming = getMuteTimingByName(String(queryParams['muteName']));
                return <MuteTimingForm muteTiming={muteTiming} showError={!muteTiming} />;
              }
              return <Redirect to="/alerting/routes" />;
            }}
          </Route>
        </Switch>
      )}
    </>
  );
};

export default MuteTimings;

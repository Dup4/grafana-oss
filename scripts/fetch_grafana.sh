#! /bin/bash

TOP_DIR="$(dirname "$(realpath "${BASH_SOURCE[0]}")")"

V="${1}"

SIMPLE_DIR_NAME="grafana-${V}"
DIR_NAME="grafana-${V}.linux-amd64"
TARGET_NAME="${DIR_NAME}.tar.gz"

wget https://dl.grafana.com/oss/release/"${TARGET_NAME}"
tar -zxvf "${TARGET_NAME}"

GRAFANA_OSS="${TOP_DIR}/../grafana-oss"

if [[ ! -d "${GRAFANA_OSS}" ]]; then
    mkdir "${GRAFANA_OSS}"
fi

TARGET_DIR="${GRAFANA_OSS}/${V}"

if [[ ! -d "${TARGET_DIR}" ]]; then
    mkdir "${TARGET_DIR}"
fi

mv "${SIMPLE_DIR_NAME}/public" "${TARGET_DIR}"

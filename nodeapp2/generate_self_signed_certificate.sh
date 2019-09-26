#!/bin/bash
host_public_ip=$1

if [ "$#" -ne 1 ]; then
	    echo "Illegal number of parameters provide host public ip address."
	        exit
fi

openssl req -new -newkey rsa:4096 -days 3650 -nodes -x509 -subj "/C=IN/ST=karnataka/L=Bangalore/O=<Venkata>/CN=$1" -keyout server.key -out server.crt


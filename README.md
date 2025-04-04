# Nginx Reverse Proxy Server setup


- Stopping nginx server :

```shell
    sudo nginx -s stop

```

- Starting nginx server

```shell
    sudo nginx 
```

- openssl configuration :

```shell
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout nginx-selfsigned.key -out nginx-selfsigned.crt

```
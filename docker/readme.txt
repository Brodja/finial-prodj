docker image  pull postgres:12-alpine

docker build -t online_archive                                                                                                                                                                                                               .

docker run -d --name library  --restart=always  -v postgres_data_library:/var/lib/postgresql/data/ -e POSTGRES_PASSWORD='Testpass!@34' -p 5454:5432  -it online_archive

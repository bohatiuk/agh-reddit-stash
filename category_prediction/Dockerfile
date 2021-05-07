FROM python:3.8.7
WORKDIR /category_prediction
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
COPY .. .
CMD [ "python3", "service.py"]
EXPOSE 8082/tcp
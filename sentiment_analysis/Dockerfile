FROM python:3.8.7
WORKDIR /sentiment_analysis
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
COPY .. .
CMD [ "python3", "service.py"]
EXPOSE 8081/tcp
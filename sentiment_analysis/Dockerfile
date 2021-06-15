FROM python:3.8.7
WORKDIR /sentiment_analysis
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt && && pip3 install spacytextblob && python3 -m spacy download en_core_web_sm && python3 -m textblob.download_corpora
COPY . .
CMD ["python3", "service.py"]
EXPOSE 8081/tcp
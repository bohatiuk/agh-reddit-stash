# API GTW - canary

FROM python:3.8.7
WORKDIR /canary
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
COPY . .
CMD ["python3", "-u", "service.py"]
EXPOSE 8080/tcp
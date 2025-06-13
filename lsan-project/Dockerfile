FROM gcc:latest

WORKDIR /usr/src/app

COPY src/main.cpp .

RUN g++ -o lsan main.cpp

CMD ["./lsan"]
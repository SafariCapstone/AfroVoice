CC = g++
CFLAGS = -Wall -Wextra -std=c++17
SRC = src/main.cpp
OBJ = $(SRC:.cpp=.o)
TARGET = lsan_project

all: $(TARGET)

$(TARGET): $(OBJ)
	$(CC) -o $@ $^

%.o: %.cpp
	$(CC) $(CFLAGS) -c $< -o $@

clean:
	rm -f $(OBJ) $(TARGET)

run: $(TARGET)
	./$(TARGET)
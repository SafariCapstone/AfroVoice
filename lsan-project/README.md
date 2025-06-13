# LSAN Project

## Overview
The LSAN project is designed to demonstrate the use of LeakSanitizer (LSAN) for detecting memory leaks in C++ applications. This project provides a simple example of how to set up and use LSAN in a Dockerized environment.

## Project Structure
```
lsan-project
├── src
│   └── main.cpp        # Main source file containing the application logic
├── Dockerfile           # Dockerfile for building the Docker image
├── .dockerignore        # Files and directories to ignore during Docker build
├── Makefile             # Makefile for building the project
└── README.md            # Project documentation
```

## Getting Started

### Prerequisites
- Docker installed on your machine
- Make installed on your machine (optional, if you want to use the Makefile)

### Building the Docker Image
To build the Docker image for the LSAN project, run the following command in the project root directory:

```
docker build -t lsan-project .
```

### Running the Application
After building the image, you can run the application using:

```
docker run --rm lsan-project
```

### Usage
The application demonstrates basic functionality and can be modified to include more complex logic. Ensure to check for memory leaks using the LeakSanitizer.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
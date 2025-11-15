pipeline {
    agent any

    environment {
        DOCKER_HOST = "unix:///var/run/docker.sock"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://your-repo-url.git'
            }
        }

        stage('Install Docker Compose (if missing)') {
            steps {
                sh """
                  if ! command -v docker-compose &> /dev/null
                  then
                    echo "Installing docker-compose..."
                    sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-\$(uname -s)-\$(uname -m)" \
                    -o /usr/local/bin/docker-compose
                    sudo chmod +x /usr/local/bin/docker-compose
                  fi
                """
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Run Application') {
            steps {
                sh 'docker-compose down || true'
                sh 'docker-compose up -d'
            }
        }
    }

    post {
        success {
            echo "Deployment successful!"
        }
        failure {
            echo "Pipeline failed!"
        }
    }
}

pipeline {
    agent none

    stages{
        stage("Test"){
            agent {
                docker {
                    image 'node:lts-alpine'
                    args '-u root:root'
                }
            }
            steps{
                sh "chmod +x -R ${env.WORKSPACE}"
                sh './scripts/test.sh'
            }
        }
        stage("Build"){
            agent {
                docker {
                    image 'node:lts-alpine'
                    args '-u root:root'
                }
            }
            steps{
                sh "chmod +x -R ${env.WORKSPACE}"
                sh "npm install"
                sh "./scripts/deliver-for-development.sh"
            }
        }
        stage("Deliver for Development"){
            agent any
            when {
                branch "development"
            }
            steps{
                sh 'rm -rf /var/www/jenkins-weather-app-dev'
                sh "cp -r ${env.WORKSPACE}/build /var/www/jenkins-weather-app-dev"
                sh "ls /var/www/jenkins-weather-app-dev"
            }
        }
        stage("Deploy for Production"){
            when {
                branch "production"
            }
            steps {
                sh 'rm -rf /var/www/jenkins-weather-app-prod'
                sh "cp -r ${env.WORKSPACE}/build /var/www/jenkins-weather-app-prod"
                sh "ls /var/www/jenkins-weather-app-prod"
            }
        }
    }
}
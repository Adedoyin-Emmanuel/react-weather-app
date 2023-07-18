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
                sh 'sudo rm -rf /var/www/jenkins-weather-app'
                sh "sudo cp -r ${env.WORKSPACE}/build /var/www/jenkins-weather-app"
                sh "sudo ls /var/www/jenkins-weather-app"
                // sh './scripts/kill.sh'
            }
        }
        stage("Deploy for Production"){
            when {
                branch "production"
            }
            steps {
                sh './scripts/deploy-for-production.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './scripts/kill.sh'
            }
        }
    }
}
pipeline {
    agent {
            docker {
                image 'node:lts-alpine'
                args '-u root:root'
            }
            }
    stages{
        stage("Test"){
            steps{
                sh "chmod +x -R ${env.WORKSPACE}"
                sh './scripts/test.sh'
            }
        }
        stage("Build"){
            steps{
                sh "npm install"
                sh "./scripts/deliver-for-development.sh"
            }
        }
        stage("Deliver for Development"){
            when {
                branch "development"
            }
            steps{
                sh "ls -ld ${env.WORKSPACE}/build"
                sh 'rm -rf /var/www/jenkins-weather-app'
                sh 'mkdir /var/www/jenkins-weather-app'
                sh "cp -r ${env.WORKSPACE}/build /var/www/jenkins-weather-app"
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
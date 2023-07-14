pipeline {
    agent {
            docker {
                image 'node:lts-alpine'
                args '-p 3000:3000 -p 5000:5000 -u root:root'
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
            }
        }
        stage("Deliver for Development"){
            when {
                branch "development"
            }
            steps{
                sh './scripts/deliver-for-development.sh'
            }
        }
        stage("Deploy for Production"){
            when {
                branch "production"
            }
            steps {
                sh './scripts/deploy-for-production.sh'
            }
        }
    }
}
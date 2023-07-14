pipeline {
    agent {
            docker {
                image 'node:lts-alpine'
                args '-p 3000:3000 -p 5000:5000'
            }
            }
    stages{
        stage("Test"){
            dir("scripts"){
                sh 'test.sh'
            }
        }
        stage("Build"){
            sh 'npm install'
        }
    }
}
@Library('shared-library') _
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
                sh './app/scripts/test.sh'
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
                dir('./app'){
                    // sh "chmod +x -R ${env.WORKSPACE}"
                    // sh 'echo "Build"'
                    sh 'pwd'
                    sh 'ls'
                }
                // sh 'pwd'
                // sh "npm install"
                // sh "./app/scripts/deliver-for-development.sh"
            }
        }
        // stage("Deliver for Development"){
        //     agent any
        //     when {
        //         branch "development"
        //     }
        //     steps{
        //         deployReact("dev")
        //     }
        // }
        // stage("Deploy for Production"){
        //     when {
        //         branch "production"
        //     }
        //     steps {
        //         deployReact("prod")
        //     }
        // }
    }
}
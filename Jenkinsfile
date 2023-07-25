@Library('shared-library') _
pipeline {
    agent any

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
                    sh "chmod +x -R ${env.WORKSPACE}"
                    sh "npm install"
                    sh "./scripts/deliver-for-development.sh"
                
                    archiveArtifacts artifacts: "build/**", fingerprint: true
                }
                
            }
        }

        stage("Deliver for Development"){
            agent any
            when {
                branch "development"
            }
            steps{
                deployReact("dev")
            }
        }
        stage("Deploy for Production"){
            when {
                branch "production"
            }
            steps {
                deployReact("prod")
            }
        }
   }
}
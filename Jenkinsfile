pipeline {
    agent none
    // agent {
    //         docker {
    //             image 'node:lts-alpine'
    //             args '-u root:root'
    //         }
    //         }
    stages{
        // stage("Test"){
        //     steps{
        //         sh "chmod +x -R ${env.WORKSPACE}"
        //         sh './scripts/test.sh'
        //     }
        // }
        stage("Build"){
            steps{
                println(">>>>>>>><<<<<<<<<")
                // sh "npm install"
                // sh "./scripts/deliver-for-development.sh"
            }
        }
        stage("Deliver for Development"){
            agent any
            when {
                branch "development"
            }
            steps{
               sh 'touch /var/www/jenkins-weather-app//me.txt'
                // sh 'rm -rf /var/www/jenkins-weather-app'
                // sh 'mkdir -p /var/www/jenkins-weather-app'
                // sh "cp -r ${env.WORKSPACE}/build/* /var/www/jenkins-weather-app"
                // sh "ls /var/www/jenkins-weather-app"
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
def call(String environment){

    sh "rm -rf /var/www/jenkins-weather-app-${environment}"
    copyArtifacts filter: 'build/**', fingerprintArtifacts: true, projectName: '${JOB_BASE_NAME}', selector: specific ('${BUILD_NUMBER}')
    sh "cp -r build /var/www/jenkins-weather-app-${environment}"
    sh "ls /var/www/jenkins-weather-app-${environment}"
}
def call(String environment){

    sh "rm -rf /var/www/jenkins-weather-app-${environment}"
    sh "copyArtifacts filter: 'build/**', fingerprintArtifacts: true, projectName: '${JOB_BASE_NAME}', selector: specific ('${BUILD_NUMBER}')"
    sh "ls build"
    // sh "cp -r ${env.WORKSPACE}/build /var/www/jenkins-weather-app-${environment}"
    // sh "ls /var/www/jenkins-weather-app-${environment}"
}
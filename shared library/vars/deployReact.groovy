def call(String environment){

    sh "rm -rf /var/www/jenkins-weather-app-${environment}"
    sh "cp -r ${env.WORKSPACE}/build /var/www/jenkins-weather-app-${environment}"
    sh "ls /var/www/jenkins-weather-app-${environment}"
}
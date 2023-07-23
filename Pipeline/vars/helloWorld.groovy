def call(Map name = [:]) {
    sh "echo Hello ${name.firstName} ${name.lastName}"
}
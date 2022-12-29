pipeline{
    agent any
    stages{
        stage("Dependencias")
        {
            steps{
                nodejs(nodeJSInstallationName: 'node'){
                    bat "npm i && npm ci"
                }
            }
        }

        stage("Sonar-Scanner")
        {
            steps{
                withSonarQubeEnv('sonarqube')
                {
                        bat "sonar-scanner"
                }
            }
        }   
    }
}
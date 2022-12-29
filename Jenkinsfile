pipeline{
    agent any
    stages{

        stage(" Dependencias y Sonar-Scanner")
        {
            steps{
                nodejs(nodeJSInstallationName: 'node'){
                    bat "npm i && npm ci"
                    withSonarQubeEnv('sonarqube')
                    {
                        bat "sonar-scanner"
                    }
                }
            }
        }
        
    }
}
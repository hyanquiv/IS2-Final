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
                        bat "npm install sonar-scanner"
                        bat "sonar-scanner"
                    }
                }
            }
        }
        
    }
}
pipeline{
    agent any
    stages{

        stage(" Dependencias y Sonar-Scanner")
        {
            steps{
                nodejs(nodeJSInstallationName: 'nodejs'){
                    bat "npm i && npm ci"
                    withSonarQubeEnv('sonar')
                    {
                        bat "npm install sonar-scanner"
                        bat "sonar-scanner"
                    }
                }
            }
        }
        
    }
}
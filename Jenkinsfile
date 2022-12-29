pipeline{
    agent any
    stages{

        stage(" Dependencias y Sonar-Scanner")
        {
            steps{
                nodejs(nodeJSInstallationName: 'node'){
                    bat "npm i && npm ci"
                    def scannerHome = tool 'sonarqube';

                    withSonarQubeEnv('sonarqube')
                    {
                        bat "npm install sonar-scanner"
                        bat "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }
        
    }
}
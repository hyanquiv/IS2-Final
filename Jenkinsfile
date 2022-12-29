pipeline{
    agent any
    stages{

        stage(" Dependencias")
        {
            steps{
                nodejs(nodeJSInstallationName: 'node'){
                    bat "npm i && npm ci"
                }
            }
        }

        stage("Sonar-Scanner"){
            steps{
                
                withSonarQubeEnv('sonarqube')
                    {
                        //bat "npm install sonar-scanner"
                        //mvn sonar:sonar
                        bat "/node_modules/sonar-scanner/bin"
                    }
            }
            
        }
    }
}
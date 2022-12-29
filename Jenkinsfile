pipeline
{
    agent any
    stages
    {
        stage(" Dependencias")
        {
            steps
            {
                nodejs(nodeJSInstallationName: 'node')
                {
                    sh "npm i && npm ci"
                }
            }
        }

        stage("Sonar-Scanner")
        {
            withSonarQubeEnv('sonarqube')
            {
                //bat "npm install sonar-scanner"
                //mvn sonar:sonar
                sh "npm install sonar-scanner"
                sh "npm run sonar"
            }    
        }
    }
}
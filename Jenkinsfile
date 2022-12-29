pipeline
{
    agent any
    stages
    {
        stage(" Dependencias")
        {
            steps
            {
                nodejs(nodeJSInstallationName: 'nodejs')
                {
                    bat "npm i && npm ci"
                }
            }
        }

        stage("Sonar-Scanner")
        {
            steps{
                withSonarQubeEnv('sonar')
                {
                    bat "npm install sonar-scanner"
                    echo "Sonar Scanner"
                    bat "sonar-scanner"
                }    
            }
        }
        
        stage("Unit Test")
        {
            steps{
                withSonarQubeEnv('sonar')
                {
                    echo "Unit Test"
                    bat "npm run test -a"
                }    
            }
        }
    }
}
pipeline{
    agent any
    stages{

        //stage(" Dependencias")
        // {
        //    steps{
         //       nodejs(nodeJSInstallationName: 'node'){
        //            bat "npm i && npm ci"
        //        }
        //    }
        //}

        stage("Sonar-Scanner"){
            steps{
                def scannerHome = tool 'sonarqube';
                withSonarQubeEnv('sonarqube')
                    {

                        //bat "npm install sonar-scanner"
                        //mvn sonar:sonar
                        sh "${scannerHome}/bin/sonar-scanner"
                        bat "sonar-scanner"
                    }
            }
            
        }
    }
}
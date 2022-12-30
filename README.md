# Snap Shot [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=See%20this%20react%20example&url=https://yog9.github.io/SnapShot/&hashtags=react,context-api,freecodecamp,developers)

[![Build Status](https://travis-ci.org/Yog9/SnapShot.svg?branch=master)](https://travis-ci.org/Yog9/SnapShot)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HitCount](http://hits.dwyl.com/Yog9/SnapShot.svg)](http://hits.dwyl.com/Yog9/SnapShot)

[Demo of Snap Shot](https://yog9.github.io/SnapShot/)

![](/snapscout.png)

### Summary

Snap Shot is a gallery created using React,React Hooks, React Router and Context API. The Routes were setup for four default pages and a search page. Also the images were displayed using the Flickr API and axios to fetch data.

### Motivation

The purpose of this project was to get familiar with React Hooks and Context API.

### Getting Started

Click the demo link or clone/download the repository on your local machine.
Create a config.js file in api folder inside src folders. In config.js file write
`export const apiKey = "YOUR_FLIKR_API_KEY";`

##### Install dependencies

`yarn install`

##### Run Snap Shot from the root directory.

`yarn start`

### Built With

- React js
- React Router
- React Hooks
- Context API
- Flickr API

### Features

**1. Responsive Design.**

**2. Search functionality added to search photos from API.**


### Contributing

Everyone is welcomed to contribute to this project. You can contribute either by submitting bugs or suggesting improvements by opening an issue on GitHub. Please see the [CONTRIBUTING](CONTRIBUTING.md) guidelines for more information.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Manual de instalacion y configuracion del pipeline de CI/CD de Jenkins
El manual se encuentra en el siguiente archivo [Manual](https://drive.google.com/file/d/1XIE2AHj_YlGAvxzcS7R8MqA-lrVRtF_z/view?usp=share_link)
<br/>

## Crear branchs: master, desarrollo y para cada integrante del equipo
![Image](https://github.com/hyanquiv/IS2-Final/blob/main/img/branches.jpeg)

## Integrar los cambios (merge)
- Facilmente Hacemos merge usando github desktop

![Merge](https://github.com/hyanquiv/IS2-Final/blob/main/img/merge.jpg)
<br/>

- Visualizamos el historial del repositorio a traves de github desktop

![Merge](https://github.com/hyanquiv/IS2-Final/blob/main/img/history.jpg)
<br/>

# Pipeline de CI/CD

Para el Proyecto, implementar um pipeline de CI/CD en Jenkins: 
<br/>
El codigo se puede ver en el archivo [Jenkins](https://github.com/hyanquiv/IS2-Final/blob/main/Jenkinsfile)

![Image](https://github.com/hyanquiv/IS2-Final/blob/main/img/pipeline.png)

```
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
```
El pipeline contiene las siguientes tareas:
<br/>
## Construcción Automática:
Este proyecto ya contaba con una contruccion automatica en [JSON](https://github.com/hyanquiv/IS2-Final/blob/main/package.json) para JavaScript.
```
{
  "name": "snapshot",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://Yog9.github.io/SnapShot",
  "dependencies": {
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
    "axios": "^0.19.2",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-router-dom": "^5.1.2",
    "react-scripts": "3.4.1",
    "sonar-scanner": "^3.1.0"
  },
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```
<br/>

## Análisis Estático:
Ejecutamos sonarqube desde el pipeline de Jenkins.

- Creamos un archivo de configuracion en el directorio del proyecto: [sonar-project.properties](https://github.com/hyanquiv/IS2-Final/blob/main/sonar-project.properties)
```
sonar.projectKey=IS-Final
sonar.projectName=IS-Final
sonar.projectVersion=1.0-SNAPSHOT
sonar.source=src/
sonar.sourceEncoding=UTF-8
sonar.host.url=http://localhost:9000
sonar.login=060e5cda987542c8595d5e2f7f8778d818c0b35b
sonar.exclusions=src/*.cssgit 
sonar.javascript.lcov.reportPath=reports/js/cov.dat
```
<br/>

- Instalamos sonar-scanner y corremos sonar-scanner con los siguientes comandos.

```
npm install sonar-scanner
```

```
sonar-scanner
```

![Sonar](https://github.com/hyanquiv/IS2-Final/blob/main/img/dependysonar.jpeg)
<br/>

- Visualizamos la consola de Jenkins al ejecutar sonar-scanner.


![ConsolaSonar](https://github.com/hyanquiv/IS2-Final/blob/main/img/consolasonarjenkins1.jpg)
<br/>
![ConsolaSonar](https://github.com/hyanquiv/IS2-Final/blob/main/img/consolasonarjenkins2.jpg)
<br/>

- Visualizar resultados de SonarScanner en SonarQube: en este [PDF](https://drive.google.com/file/d/1maQyMKqt15Q4TCMY2ngCxaSLYteeUysM/view?usp=sharing)

[http://localhost:9000](http://localhost:9000)


![Sonar](https://github.com/hyanquiv/IS2-Final/blob/main/img/sonarhost.jpeg)

## Pruebas Unitarias
Se encuentran en en el archivo [App.test.js](https://github.com/hyanquiv/IS2-Final/blob/main/src/App.test.js)
<br/>
Para correr los test se debe de usar el siguiente comando pe:

```
npm run test
```

Renderizar el App

```
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});



```

Llamando al boton search por lo menos una vez 

```
test('click the button search calls evente handler once', () => {

  const note = {
    content: 'This is a important test',
    important: true
  }

  const mockSearch = jest.fn()

  const componentSearch = render(<Search search={note} toggleImportance={mockSearch} />) 

  const button = componentSearch.getByText('Make not important')

  fireEvent.click(button)

  expect(mockSearch).toHaveBeenCalledTimes(1)
  
})
```


![](https://github.com/hyanquiv/IS2-Final/blob/main/img/unittest.jfif)



## Pruebas de Seguridad:


- Para las pruebas de seguridad usamos OWASP ZAP todo el documento del resultado de las pruebas se puede ver: en este [PDF](https://drive.google.com/file/d/127jz2_mT5RLQ49pt0MqqHEZIfGZNDu_8/view?usp=sharing)

## Pruebas de Performance:

- La prueba de performance fue realizada en JMETER la cual se puede ver: en este [PDF](https://drive.google.com/file/d/1gHz1hwC8kCdvmjlqyPgMrTWAJjCtAPXw/view?usp=share_link)

## Tablero de Trello:

- En este tablero de trello podemos ver la division de los esfuerzos [TRELLO](https://trello.com/b/MMVPHmDL/proyecto-final)

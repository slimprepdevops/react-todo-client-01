pipeline {
    agent any
    environment {
        SSH_CRED = credentials('key-pem')
        def CONNECT = 'ssh -o StrictHostKeyChecking=no ubuntu@ec2-54-196-57-27.compute-1.amazonaws.com'
    }
    stages {

        stage('Pre-Build') {
            steps {
                echo 'install required packages'
                sh "npm install"
                echo 'react packages installed'
            }
        }
        
        stage('Build') {
            steps {
                echo 'building static react app'
                sh "npm run build"
            }
        }

        stage('Package app') {
            steps {
                echo 'building static react app'
                sh "cd build && zip -r webapp.zip ."
                sh "cd .."
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying to our nginx server'
                sshagent(['key-pem']) {
                    sh 'scp -o StrictHostKeyChecking=no -i $SSH_CRED build/webapp.zip ubuntu@ec2-54-196-57-27.compute-1.amazonaws.com:/home/ubuntu'
            
                    sh '$CONNECT "sudo apt install zip -y"'
                    sh '$CONNECT "sudo rm -rf /var/www/html/"'
                    sh '$CONNECT "sudo mkdir /var/www/html/"'
                    
                    sh '$CONNECT "sudo unzip webapp.zip -d /var/www/html/"'
                    
                }
            }
        }


        stage('Clean-Up') {
            steps {
                echo 'Remove unwanted files'
                sh 'sudo rm -R node_modules'
                sh "sudo rm -R build"
            }
        }
    }
}
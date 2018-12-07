node {
    switch(env.BRANCH_NAME) {
      case "develop":
        branch = "Dev"
        break
      case "master":
        branch = "Master"
        break
    }
}


pipeline {
    agent any
    stages {
        stage('External dependencies') {
            steps {
                script {
                        try {
                            sh "npm install"
                        } catch (Exception e) {
                            e = "<code>\u274C ERROR(${env.BRANCH_NAME} frontend branch): NPM ERROR</code>"
                            sh "curl 'https://api.telegram.org/bot705294643:AAGnXC6EzmrpXU4USD6uxq7U1Qt853s4ciY/sendMessage?chat_id=-260723883@Avakada_CI&text=${e}&parse_mode=HTML'"
                            throw ex
                        }
                    }
                }
        }
        stage('Build') {
            steps {
                script {
                        try {
                            sh "node --max_old_space_size=8192 ./node_modules/@angular/cli/bin/ng build --prod --build-optimizer=false"
                        } catch (Exception e) {
                            e = "<code>\u274C ERROR(${env.BRANCH_NAME} frontend branch): BUILD ERROR</code>"
                            sh "curl 'https://api.telegram.org/bot705294643:AAGnXC6EzmrpXU4USD6uxq7U1Qt853s4ciY/sendMessage?chat_id=-260723883@Avakada_CI&text=${e}&parse_mode=HTML'"
                            throw ex
                        }
                    }
            }
        }
        stage('Delivery') {
             steps {
                 script {
                         try {
                             sh "sudo -u root chmod -R 777 /home/makeperfectby/Assembly/${branch}/Front/Code/*"
                             sh "rm -rf /home/makeperfectby/Assembly/${branch}/Front/Code/*"
                             sh "cp -r dist/make-perfet-front/* /home/makeperfectby/Assembly/${branch}/Front/Code/"
                             sh "sudo -u root chmod -R 777 /home/makeperfectby/Assembly/${branch}/Front/Code/*"
                         } catch (ex) {
                             e = "<code>\u274C ERROR(${env.BRANCH_NAME} frontend branch): DELIVERY ERROR</code>"
                             sh "curl 'https://api.telegram.org/bot705294643:AAGnXC6EzmrpXU4USD6uxq7U1Qt853s4ciY/sendMessage?chat_id=-260723883@Avakada_CI&text=${e}&parse_mode=HTML'"
                             throw ex
                         }
                     }
             }
        }
        stage('Notification') {
            steps {
                script {
                    mes = "<pre>\u2705 FRONTEND (${env.BRANCH_NAME})</pre>"
                    sh "curl 'https://api.telegram.org/bot705294643:AAGnXC6EzmrpXU4USD6uxq7U1Qt853s4ciY/sendMessage?chat_id=-260723883@Avakada_CI&text=${mes}&parse_mode=HTML'"
                }
            }
        }

    }
}


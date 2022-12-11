# jenkins-ssh-agent

## Paths:
- /usr/bin/git
- /usr/bin/git-lfs
- /home/jenkins/mvn
- /home/jenkins/mvn4
- /usr/lib/jvm/java-1.8.0-amazon-corretto
- /usr/lib/jvm/java-11-amazon-corretto
- /usr/lib/jvm/java-15-amazon-corretto
- /usr/lib/jvm/java-16-amazon-corretto
- /usr/lib/jvm/java-17-amazon-corretto
- /usr/lib/jvm/java-18-amazon-corretto
- /usr/lib/jvm/java-19-amazon-corretto

## compose.yaml:
```yml
version: "3"
services:
    jenkins:
        container_name: jenkins
        image: jenkins/jenkins:alpine
        restart: always
        user: root
        environment:
        - "TZ=Europe/Berlin"
        - "JAVA_OPTS=-Xmx512M -Xms256M"
        ports:
        - "58080:8080"
        volumes:
        - "/opt/jenkins:/var/jenkins_home"
        links:
        - jenkins-agent

    jenkins-agent:
        container_name: jenkins-agent
        image: zoeyvid/jenkins-ssh-agent
        restart: always
        environment:
        - "TZ=Europe/Berlin"
        - "JENKINS_AGENT_SSH_PUBKEY=ssh-rsa ABCDEFGHIJKLMNOPQRSTUVWXYZ"
```

steph@SIMREU052:~$ mkdir testBranches
steph@SIMREU052:~$ ls

steph@SIMREU052:~$ cd testBranches
steph@SIMREU052:~/testBranches$ ls
steph@SIMREU052:~/testBranches\$ git clone https://github.com/Colossus1985/testBranches

steph@SIMREU052:~/testBranches$ ls
testBranches
steph@SIMREU052:~/testBranches$ cd testBranches
steph@SIMREU052:~/testBranches/testBranches$ ls
main.txt
steph@SIMREU052:~/testBranches/testBranches$ nano lismoi.txt
steph@SIMREU052:~/testBranches/testBranches$ ls
lismoi.txt  main.txt
steph@SIMREU052:~/testBranches/testBranches$ git branch

- main

steph@SIMREU052:~/testBranches/testBranches$ git checkout moiste
error: le spécificateur de chemin 'moiste' ne correspond à aucun fichier connu de git
steph@SIMREU052:~/testBranches/testBranches$ git branch

- main
  steph@SIMREU052:~/testBranches/testBranches$ cd main
bash: cd: main: Aucun fichier ou dossier de ce type
steph@SIMREU052:~/testBranches/testBranches$ git branch stemoi
  steph@SIMREU052:~/testBranches/testBranches$ ls
lismoi.txt  main.txt
steph@SIMREU052:~/testBranches/testBranches$ git branch
- main
  stemoi
  steph@SIMREU052:~/testBranches/testBranches\$ git log --decorate

steph@SIMREU052:~/testBranches/testBranches\$ git branch

- main
  stemoi
  steph@SIMREU052:~/testBranches/testBranches$ git add lismoi.txt
steph@SIMREU052:~/testBranches/testBranches$ git commit

steph@SIMREU052:~/testBranches/testBranches\$ git push

steph@SIMREU052:~/testBranches/testBranches$ ls
lismoi.txt  main.txt
steph@SIMREU052:~/testBranches/testBranches$ git branch

- main
  stemoi
  steph@SIMREU052:~/testBranches/testBranches$ git branch stemoi
fatal: Une branche nommée 'stemoi' existe déjà.
steph@SIMREU052:~/testBranches/testBranches$ git checkout stemoi
  Basculement sur la branche 'stemoi'
  steph@SIMREU052:~/testBranches/testBranches$ git add lismoi.txt
fatal: le chemin 'lismoi.txt' ne correspond à aucun fichier
steph@SIMREU052:~/testBranches/testBranches$ ls
  main.txt
  steph@SIMREU052:~/testBranches/testBranches$ cd ..
steph@SIMREU052:~/testBranches$ ls
  testBranches
  steph@SIMREU052:~/testBranches$ ls
testBranches
steph@SIMREU052:~/testBranches$ cd testBranches
  steph@SIMREU052:~/testBranches/testBranches$ ls
main.txt
steph@SIMREU052:~/testBranches/testBranches$ nano lismoi.txt
  steph@SIMREU052:~/testBranches/testBranches\$ git status
  Sur la branche stemoi
  Fichiers non suivis:
  (utilisez "git add <fichier>..." pour inclure dans ce qui sera validé)
  lismoi.txt

aucune modification ajoutée à la validation mais des fichiers non suivis sont présents (utilisez "git add" pour les suivre)
steph@SIMREU052:~/testBranches/testBranches$ git add lismoi.txt
steph@SIMREU052:~/testBranches/testBranches$ git commit
[stemoi 175385e] alors ca marche
1 file changed, 2 insertions(+)
create mode 100644 lismoi.txt
steph@SIMREU052:~/testBranches/testBranches\$ git push
fatal: La branche courante stemoi n'a pas de branche amont.
Pour pousser la branche courante et définir la distante comme amont, utilisez

    git push --set-upstream origin stemoi

steph@SIMREU052:~/testBranches/testBranches\$ git push --set-upstream origin stemoi
Énumération des objets: 4, fait.
Décompte des objets: 100% (4/4), fait.
Compression par delta en utilisant jusqu'à 4 fils d'exécution
Compression des objets: 100% (2/2), fait.
Écriture des objets: 100% (3/3), 313 octets | 313.00 Kio/s, fait.
Total 3 (delta 0), réutilisés 0 (delta 0)
remote:
remote: Create a pull request for 'stemoi' on GitHub by visiting:
remote: https://github.com/Colossus1985/testBranches/pull/new/stemoi
remote:
To https://github.com/Colossus1985/testBranches

- [new branch] stemoi -> stemoi
  La branche 'stemoi' est paramétrée pour suivre la branche distante 'stemoi' depuis 'origin'.
  steph@SIMREU052:~/testBranches/testBranches\$

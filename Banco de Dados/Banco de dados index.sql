COMO ATULIZAR OS QUADRINHO 




UPDATE MARVEL
SET name = 'Tales of Suspense', genero = 'Ficção Cientifica'
WHERE id = 5;

SELECT * FROM MARVEL



 banco de dados usa somente aspas simples 
 ---------------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE TABLE MARVEL  (

id int   primary key ,
nome varchar(60) ,
genero varchar(30) 
);

INSERT INTO MARVEL VALUES(001, 'X-Men Dias de um Futuro Esquecido','Aventura');
INSERT INTO MARVEL VALUES(002, 'Amazing Spider Man', 'Aventura');
INSERT INTO MARVEL VALUES(003, 'Ultimate Spider Man', 'Aventura')
INSERT INTO MARVEL VALUES(004, 'Hawkeye', 'Aventura');
INSERT INTO MARVEL VALUES(005, 'Tales of suspense ', 'ficção cientifica');
INSERT INTO MARVEL VALUES(006, 'Guerra Civil', 'Drama Político');
INSERT INTO MARVEL VALUES(007, 'Motoqueiro Fantasma','Sobrenatural');
INSERT INTO MARVEL VALUES(008, 'Quarteto Fantastico', 'Aventura');
INSERT INTO MARVEL VALUES(009, 'Vingadores', 'Aventura');
INSERT INTO MARVEL VALUES(010, 'Guerras Secretas', 'Suspense');



---------------------------------------------------------------------------------------------------------------------------------------------------------------


CREATE TABLE LOGIN (


USUARIO VARCHAR (14) NOT NULL,
EMAIL VARCHAR (50) NOT NULL,
SENHA  VARCHAR (14) NOT NULL
);

INSERT INTO LOGIN VALUES('ALESANTOS', 'ALEXANDRELEITEDOSSANTOS@GMAIL.COM', 'Xande@1998') ;

SELECT * FROM LOGIN









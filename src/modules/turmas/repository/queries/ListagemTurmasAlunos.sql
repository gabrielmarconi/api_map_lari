DECLARE @idTurma INT

SET @idTurma = :idTurma

SELECT turmasAlunos.*
	  ,alunos.nome	  
FROM turmasAlunos
INNER JOIN alunos ON turmasAlunos.idTurma = alunos.id
WHERE (turmasAlunos.idTurma = @idTurma)
SELECT turmas.id	  
	  ,turmas.nome	  
FROM turmas
WHERE ((:todasTurmas <> 1) OR (turmas.id = :idTurma))
ORDER BY turmas.nome
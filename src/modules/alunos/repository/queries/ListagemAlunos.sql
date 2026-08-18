SELECT alunos.id	  
	  ,alunos.nome	  
FROM alunos
WHERE ((:todosAlunos <> 1) OR (alunos.id = :idAluno))
ORDER BY alunos.nome
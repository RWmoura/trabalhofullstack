package com.exemplo.cadastropessoas.service;

import com.exemplo.cadastropessoas.model.Pessoa;
import com.exemplo.cadastropessoas.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PessoaService {

    @Autowired
    private PessoaRepository pessoaRepository;

    public Pessoa salvarPessoa(Pessoa pessoa) {
        if (pessoaRepository.findByCpf(pessoa.getCpf()).isPresent()) {
            throw new RuntimeException("CPF já cadastrado.");
        }
        return pessoaRepository.save(pessoa);
    }

    public List<Pessoa> listarPessoas() {
        return pessoaRepository.findAll();
    }
}

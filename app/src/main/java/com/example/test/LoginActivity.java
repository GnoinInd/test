package com.example.test;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Patterns;
import android.widget.Toast;

import com.example.test.databinding.ActivityLoginBinding;

public class LoginActivity extends AppCompatActivity {

    private ActivityLoginBinding binding;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityLoginBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());

        binding.registerBtn.setOnClickListener(v -> {
            startActivity(new Intent(this, SignUpActivity.class));
            overridePendingTransition(0,0);
            finishAffinity();
        });

        binding.login.setOnClickListener(v -> {
            if(!binding.email.getText().toString().trim().equals("") && !binding.password.getText().toString().trim().equals("") ){

                if(!Patterns.EMAIL_ADDRESS.matcher(binding.email.getText().toString().trim()).matches()){
                    Toast.makeText(this, "Please enter email in correct pattern", Toast.LENGTH_SHORT).show();
                    return;
                }
                if(binding.password.getText().toString().trim().length() <6){
                    Toast.makeText(this, "Password length should be >= 6.", Toast.LENGTH_SHORT).show();
                    return;
                }

                startActivity(new Intent(LoginActivity.this, MainActivity.class));
                Toast.makeText(LoginActivity.this, "Sign In Successfully ", Toast.LENGTH_SHORT).show();
                finishAffinity();
            }
            else Toast.makeText(this, "Please Enter * fields", Toast.LENGTH_SHORT).show();
        });




    }

    private boolean validateEnrollForm(String email, String password) {
        if (email.equals("") || !Patterns.EMAIL_ADDRESS.matcher(email).matches()) {
            binding.email.setError("enter the valid email id!");
            binding.email.requestFocus();
            if(password.equals("")){
                binding.password.setError("can not be empty");
            }
            return false;
        }
        if (password.equals("")) {
            binding.password.setError("can not be empty");
            binding.password.requestFocus();
            return false;
        }
        return true;
    }
}
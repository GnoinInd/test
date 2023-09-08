package com.example.test;

import androidx.appcompat.app.AppCompatActivity;

import android.app.DatePickerDialog;
import android.content.Intent;
import android.os.Bundle;
import android.text.InputType;
import android.util.Patterns;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.DatePicker;
import android.widget.Toast;

import com.example.test.databinding.ActivitySignUpBinding;
import com.google.android.material.datepicker.MaterialDatePicker;

import java.util.Calendar;
import java.util.Locale;

public class SignUpActivity extends AppCompatActivity {

    private ActivitySignUpBinding binding;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivitySignUpBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());

        binding.loginBtn.setOnClickListener(v -> {
            startActivity(new Intent(this, LoginActivity.class));
            overridePendingTransition(0,0);
            finishAffinity();
        });


        Calendar calendar = Calendar.getInstance();
        final int year = calendar.get(Calendar.YEAR);
        final int month = calendar.get(Calendar.MONTH);
        final int day = calendar.get(Calendar.DAY_OF_MONTH);
        binding.dobLayout.setEndIconOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                DatePickerDialog datePickerDialog = new DatePickerDialog(
                        SignUpActivity.this
                        , new DatePickerDialog.OnDateSetListener() {
                    @Override
                    public void onDateSet(DatePicker view, int year, int month, int day) {
                        month = month + 1;
                        final String date = String.format(Locale.ENGLISH,"%02d/"+"%02d/",day,month)+year;

                        binding.dob.setText(date);
                    }
                }, year, month, day);
                datePickerDialog.show();
            }
        });


        ArrayAdapter<CharSequence> genderAdapter = ArrayAdapter.createFromResource(this, R.array.gender_array, android.R.layout.simple_spinner_dropdown_item);
        binding.gender.setAdapter(genderAdapter);
        binding.gender.setRawInputType(InputType.TYPE_NULL);

        binding.dob.setRawInputType(InputType.TYPE_NULL);


        binding.createAccount.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                if(!binding.password.getText().toString().trim().equals("") &&
                        !binding.email.getText().toString().trim().equals("") &&
                        !binding.fullName.getText().toString().trim().equals("") &&
                        !binding.gender.getText().toString().trim().equals("") &&
                        !binding.dob.getText().toString().trim().equals("") &&
                        !binding.phoneNo.getText().toString().trim().equals("") ) {

                    if(!Patterns.EMAIL_ADDRESS.matcher(binding.email.getText().toString().trim()).matches()){
                        Toast.makeText(SignUpActivity.this, "Please fill email in correct Pattern", Toast.LENGTH_SHORT).show();
                        return;
                    }
                    if(binding.password.getText().toString().trim().length() <6){
                        Toast.makeText(SignUpActivity.this, "Password length should be >= 6.", Toast.LENGTH_SHORT).show();
                        return;
                    }

                    Intent intent = new Intent(SignUpActivity.this, MainActivity.class);
                    startActivity(intent);
                    Toast.makeText(SignUpActivity.this, "Sign In Successfully ", Toast.LENGTH_SHORT).show();
                    finishAffinity();
                }
                else {
                    Toast.makeText(SignUpActivity.this, "Please fill * fields", Toast.LENGTH_SHORT).show();
                }
            }
        });
    }
}
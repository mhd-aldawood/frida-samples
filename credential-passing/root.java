package com.darvin.security;

import androidx.appcompat.app.AppCompatActivity;
import androidx.localbroadcastmanager.content.LocalBroadcastManager;

import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import java.io.File;

public class MainActivity2 extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);
        Button b = (Button)findViewById(R.id.button);
        b.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
              EditText editText= findViewById(R.id.edittext);
              EditText editText1= findViewById(R.id.edittext1);
              if(!editText1.getText().toString().isEmpty()
                      &&!editText.getText().toString().isEmpty()
                      &&editText1.getText().toString().equals(editText.getText().toString()))
              {
                  Intent intent=new Intent(getApplicationContext(), MainActivity.class);
                  startActivity(intent);
              }
            }
        });
    }

}
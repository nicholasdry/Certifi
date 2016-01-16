import java.applet.Applet;
import java.awt.Color;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JPasswordField;
import javax.swing.JTextField;

@SuppressWarnings("serial")
public class Login extends Applet {
	
	public void init() {
		
		setLayout(new GridLayout(2, 1));
		setBackground(Color.BLACK);
		
		JPanel login = new JPanel();
		
		login.setLayout(new GridLayout(2, 1));
		login.setBackground(Color.BLACK);
		
		JPanel info = new JPanel();
		
		info.setLayout(new GridLayout(2, 2));
		info.setBackground(Color.BLACK);
		
		JLabel username = new JLabel("USERNAME");
		JLabel password = new JLabel("PASSWORD");
		
		final JTextField getUsername = new JTextField();
		final JPasswordField getPassword = new JPasswordField();
		
		info.add(username);
		info.add(getUsername);
		
		info.add(password);
		info.add(getPassword);
		
		JButton loginButton = new JButton("LOGIN");
		
		loginButton.addActionListener(
				
			new ActionListener() {

				public void actionPerformed(ActionEvent actionEvent) {
					login(getUsername.getText(), getPassword.getPassword());
				}
			}
		);
		
		login.add(info);
		login.add(loginButton);
		
		JPanel register = new JPanel();
		
		register.setLayout(new GridLayout(2, 1));
		register.setBackground(Color.BLACK);
		
		JLabel registerLabel = new JLabel("NEW TO CERTIFI? REGISTER!");
		
		JButton registerButton = new JButton("REGISTER");
		
		registerButton.addActionListener(
				
			new ActionListener() {

				public void actionPerformed(ActionEvent actionEvent) {
					register();
				}
			}
		);

		register.add(registerLabel);
		register.add(registerButton);
		
		add(login);
		add(register);
	}
	
	private void login(String username, char[] password) {
		
		System.out.println("USERNAME: " + username);
		
		String passwordText = "";
		
		for(int i = 0; i < password.length; i++)
			passwordText += password[i];
		
		System.out.println("PASSWORD: " + passwordText);
	}
	
	private void register() {
		System.out.println("REGISTERING");
	}
}

# Kernel Domain 
### A.I Powered Innovations
Kernel Domain provides technical solutions, infrastructure, and software services to hyper-scale business automation. Our technology products and services generate innovative insights that will drive efficiencies in managing and operating businesses powered by intelligent insights. Our solutions play in inter-disciplinary domains using artificial intelligence by provising bespoke LLM solutions.

__A.I powered software and hardware solutions__

1. Tech Strategy and Architecture solutions for Multi-Cloud, Hybrid & On-Premise 
2. Data Lakehouse to Warehouse blueprints & managed solution platform [Databricks, Snowflake, Cloud-Native]
3. Secure Technology Infrastructure Accelerators & Bespoke solutions
4. Composite Enteprise Service Bus [CESB]
5. Adaptive Metadata driven data Pipelines [AMP]
6. GPU optimized application & rendering solutions [OP-CUDA]


### _Other Configurations related:_

#### Customization: Add your own data
Change the data in the ```data.json``` file as well as add any images to ```public/img/```
You can also change styles by modifying the ```public/css``` files.
If you need the contact form to work, you also need to create an EmailJS account, and modify the ```src/components/contact.jsx``` file to replace your own service ID, template ID and Public Key

#### Customization: Install Serve & Pm2
sudo npm install -g serve pm2
pm2 serve /home/bitnami/runtime/KernelDomain/build 3000

#### Customization: Install as service on Lighsail
> `sudo systemctl disable apache2` </br>
> `nohup serve -s build &` </br>
> `systemd-analyze verify kerneldomain.service`

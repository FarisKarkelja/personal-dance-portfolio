document.addEventListener('DOMContentLoaded', function() {

    const toggleSwitch = document.getElementById('flexSwitchCheckChecked');

    
    const employeeFields = document.querySelectorAll('.employee-field');
    const hirerFields = document.querySelectorAll('.hirer-field');
    const heading = document.querySelector('h2');

   
    function toggleFormFields() {
        if (toggleSwitch.checked == false) {
            
            employeeFields.forEach(field => {
                field.style.display = 'block';
            });
            hirerFields.forEach(field => {
                field.style.display = 'none';
            });
            // Update the heading text
            heading.textContent = 'Apply as an Employee';
        } else {
            
            employeeFields.forEach(field => {
                field.style.display = 'none';
            });
            hirerFields.forEach(field => {
                field.style.display = 'block';
            });
            // Update the heading text
            heading.textContent = 'Apply as a Hirer';
        }
    }


    toggleFormFields();

   
    toggleSwitch.addEventListener('change', toggleFormFields);
});
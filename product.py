import csv

def read_csv(file_name):
    data = []
    with open(file_name, 'r') as file:
        csv_reader = csv.reader(file)
        for row in csv_reader:
            data.append(row)
    return data

def write_csv(file_name, data):
    with open(file_name, 'w', newline='') as file:
        csv_writer = csv.writer(file)
        csv_writer.writerows(data)

def add_data(file_name, new_data):
    data = read_csv(file_name)
    data.append(new_data)
    write_csv(file_name, data)

def delete_data(file_name, index):
    data = read_csv(file_name)
    del data[index]
    write_csv(file_name, data)

def search_people_by_id(file_name, people_id):
    with open(file_name, 'r') as file:
        csv_reader = csv.DictReader(file)
        for row in csv_reader:
            if row['Index'] == people_id:
                return row
    return None

def update_people_details(file_name, people_id, updated_details):
    data = []
    with open(file_name, 'r') as file:
        csv_reader = csv.DictReader(file)
        fieldnames = csv_reader.fieldnames
        for row in csv_reader:
            if row['Index'] == people_id:
                row.update(updated_details)
            data.append(row)
    
    with open(file_name, 'w', newline='') as file:
        csv_writer = csv.DictWriter(file, fieldnames=fieldnames)
        csv_writer.writeheader()
        csv_writer.writerows(data)

def update_column_with_same_value(file_name, column_name, new_value):
    data = []
    with open(file_name, 'r') as file:
        csv_reader = csv.DictReader(file)
        fieldnames = csv_reader.fieldnames
        for row in csv_reader:
            row[column_name] = new_value
            data.append(row)

    with open(file_name, 'w', newline='') as file:
        csv_writer = csv.DictWriter(file, fieldnames=fieldnames)
        csv_writer.writeheader()
        csv_writer.writerows(data)


def main():
    file_name = 'customers-100.csv'

    services = ["1. Data Entry 2. Data Access 3. Data Modification 4. Data Deletion"]

    print(*services)

    service_input = input("What type of Service you want?")

    if service_input == '1':
        # Add new data
        new_data = ['Eve', '28', 'San Francisco']
        add_data(file_name, new_data)

    if service_input == '4':
       # Delete data at index 2
        delete_data(file_name, 2)

    if service_input == '3':
        # Modify data
        mod_who = input("Whose data you want to modify? Student or Employee: ").lower()

        if mod_who == "student":
            #update particular student via register no.
            people_id = input("Enter the Student Register No. to update: ")
            people_details = search_people_by_id(file_name, people_id)
            if people_details:
                print("Student Details found:")
                print("Index:", people_details['Index'])
                print("Register No:", people_details['Register No'])
                print("First Name:", people_details['First Name'])
                print("Last Name:", people_details['Last Name'])

                # Prompt for updated details
                updated_reg = input("Enter updated Register No: ")
                updated_fname = input("Enter updated First Name: ")
                updated_lname = input("Enter updated Last Name: ")

                updated_details = {'Register No': updated_reg, 'First Name': updated_fname, 'Last Name': updated_lname}

                # Update people details
                update_people_details(file_name, people_id, updated_details)
                print("Student details updated successfully.")
            else:
                print("Student not found.")

            #update group of student via classroom
            # column_name = input("Enter the column name to update: ")
            # new_value = input("Enter the new value for the column: ")

            # # Update the specified column with the new value for all peoples
            # update_column_with_same_value(file_name, column_name, new_value)
            # print(f"{column_name} column updated successfully.")


    if service_input == '2':
        # Read and print updated data
        access_who = input("Whose data you want? Type 'student' or 'employee': ").lower()

        if access_who == "student":
            access_how = input("All students or Particular student? ").lower()
            if access_how == "all students":
                updated_data = read_csv(file_name)
                for row in updated_data:
                    print(*row)
                    
            # Search Data by ID
            if access_how == "particular":
                loop = 0
                while loop == 0:
                    register_no = input("Enter the Student Register Number: ").lower()
                    people_details = search_people_by_id(file_name, register_no)
                    if register_no != "exit":
                        print("Student Details:")
                        print("Index:", people_details['Index'])
                        print("Register No:", people_details['Register No'])
                        print("First Name:", people_details['First Name'])
                        print("Last Name:", people_details['Last Name'])
                    elif register_no == "exit":
                        loop = 1
                    else:
                        print("Student not found.")

        if access_who == "employee":
            access_how = input("All employees or Particular employee? ").lower()
            if access_how == "all":
                updated_data = read_csv(file_name)
                for row in updated_data:
                    print(*row)

            # Search Data by ID
            if access_how == "particular":
                loop = 0
                while loop == 0:
                    register_no = input("Enter the employee ID: ").lower()
                    people_details = search_people_by_id(file_name, register_no)
                    if register_no != "exit":
                        print("Student Details:")
                        print("Index:", people_details['Index'])
                        print("Register No:", people_details['Register No'])
                        print("First Name:", people_details['First Name'])
                        print("Last Name:", people_details['Last Name'])
                    elif register_no == "exit":
                        loop = 1
                    else:
                        print("Employee not found.")



if __name__ == "__main__":
    main()

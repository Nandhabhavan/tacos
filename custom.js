const form = document.querySelector('form');
const addStudentBtn = document.getElementById("stu-btn");
const addEmployeeBtn = document.getElementById("emp-btn");
const addParStudentBtn = document.getElementById("par-stu-btn");
const addParEmployeeBtn = document.getElementById("par-emp-btn");
const sectionStudent = document.getElementById("table-student");
const sectionEmployee = document.getElementById("table-employee");
const sectionParStudent = document.getElementById("table-par-student");
const sectionParEmployee = document.getElementById("table-par-employee");



// Check if the student button exists on the current page
if (addStudentBtn) {
    // Add event listener for adding student data
    addStudentBtn.addEventListener("click", function() {
        StudentData();
    });
}

// Check if the employee button exists on the current page
if (addEmployeeBtn) {
    // Add event listener for adding employee data
    addEmployeeBtn.addEventListener("click", function() {
        EmployeeData();
    });
}

document.addEventListener("click", function(event) {
    const addParStudentBtn = event.target.closest("#par-stu-btn");
    if (addParStudentBtn) {
        // Prevent the default action of the anchor tag
        event.preventDefault();
        // Call the ParStudentData function
        ParStudentData("table-par-student-section");
    }
});

document.addEventListener("click", function(event) {
    const addParEmployeeBtn = event.target.closest("#par-emp-btn");
    if (addParEmployeeBtn) {
        // Prevent the default action of the anchor tag
        event.preventDefault();
        // Call the ParEmployeeData function
        ParEmployeeData("table-par-employee-section");
    }
});


if (addParEmployeeBtn) {
    // Add event listener for adding employee data
    addParEmployeeBtn.addEventListener("click", function() {
        ParEmployeeData();
    });
}

function StudentData(){
    const section = document.createElement("section");
    section.classList.add("pb-section");

    const containerTab = document.createElement("div");
    containerTab.classList.add("container-tab");

    const table = document.createElement("div");
    table.classList.add("table");

    const tablesec = document.createElement("div");
    tablesec.classList.add("table-sec");
    tablesec.innerHTML = `
        <p>Section: B</p>
    `;

    const tableHeader = document.createElement("div");
    tableHeader.classList.add("table-header");
    tableHeader.innerHTML = `
        <div class="header__item">Register No.</div>
        <div class="header__item">Name</div>
        <div class="header__item">Standard</div>
        <div class="header__item">Attendance %</div>
        <div class="header__item">DoB</div>
        <div class="header__item">Phone No.</div>
        <div class="header__item">Father</div>
        <div class="header__item">Link</div>
    `;
    
    const tableContent = document.createElement("div");
    tableContent.classList.add("table-content");

    const tableRow = document.createElement("div");

    // Number of rows to add
    const numRows = 20; // Change this to the desired number of rows

    // Loop to generate rows
    for (let i = 0; i < numRows; i++) {
        const tableRow = document.createElement("div");
        tableRow.classList.add("table-row");
        tableRow.innerHTML = `
            <div class="table-data" contenteditable="true">921520104016</div>
            <div class="table-data" contenteditable="true">Name ${i+1}</div>
            <div class="table-data" contenteditable="true">12</div>
            <div class="table-data" contenteditable="true">80</div>
            <div class="table-data" contenteditable="true">28.01.2003</div>
            <div class="table-data" contenteditable="true">9215201042</div>
            <div class="table-data" contenteditable="true">Sathiyamoorthy</div>
            <a class="table-data" id="par-stu-btn">View</a>
        `;
        tableContent.appendChild(tableRow);
    }

    table.appendChild(tablesec);
    tableContent.appendChild(tableRow);
    table.appendChild(tableHeader);
    table.appendChild(tableContent);
    containerTab.appendChild(table);
    section.appendChild(containerTab);
    sectionStudent.appendChild(section);
}

function EmployeeData(){
    const section = document.createElement("section");
    section.classList.add("pb-section");

    const containerTab = document.createElement("div");
    containerTab.classList.add("container-tab");

    const table = document.createElement("div");
    table.classList.add("table");

    const tablesec = document.createElement("div");
    tablesec.classList.add("table-sec");
    tablesec.innerHTML = `
        <p>Section: A</p>
    `;

    const tableHeader = document.createElement("div");
    tableHeader.classList.add("table-header");
    tableHeader.innerHTML = `
        <div class="header__item">Register No.</div>
        <div class="header__item">Name</div>
        <div class="header__item">Standard</div>
        <div class="header__item">Attendance %</div>
        <div class="header__item">DoB</div>
        <div class="header__item">Phone No.</div>
        <div class="header__item">Father</div>
        <div class="header__item">Link</div>
    `;
    
    const tableContent = document.createElement("div");
    tableContent.classList.add("table-content");

    const tableRow = document.createElement("div");

    // Number of rows to add
    const numRows = 20; // Change this to the desired number of rows

    // Loop to generate rows
    for (let i = 0; i < numRows; i++) {
        const tableRow = document.createElement("div");
        tableRow.classList.add("table-row");
        tableRow.innerHTML = `
            <div class="table-data" contenteditable="true">921520104016</div>
            <div class="table-data" contenteditable="true">Name ${i+1}</div>
            <div class="table-data" contenteditable="true">12</div>
            <div class="table-data" contenteditable="true">80</div>
            <div class="table-data" contenteditable="true">28.01.2003</div>
            <div class="table-data" contenteditable="true">9215201042</div>
            <div class="table-data" contenteditable="true">Sathiyamoorthy</div>
            <a href="" class="table-data" id="par-emp-btn">View</a>
        `;
        tableContent.appendChild(tableRow);
    }

    table.appendChild(tablesec);
    tableContent.appendChild(tableRow);
    table.appendChild(tableHeader);
    table.appendChild(tableContent);
    containerTab.appendChild(table);
    section.appendChild(containerTab);
    sectionEmployee.appendChild(section);
}

function ParStudentData(sectionId){
    const section = document.createElement("section");
    section.id = sectionId;
    section.classList.add("pb-section");

    const container = document.createElement("div");
    container.classList.add("container");

    const row = document.createElement("div");
    row.classList.add("row");
    
    const class1 = document.createElement("div");
    class1.classList.add("pb-educator", "text-center");

    const button = document.createElement("button");
    button.classList.add("item-4");
    button.addEventListener("click", function() {
        removeSection(sectionId);
    });

    const media = document.createElement("figure");
    media.classList.add("media");
    media.innerHTML =`
        <img src="img/Educators/Nandhabhavan.jpg" class="img-responsive">
    `;

    const text = document.createElement("div");
    text.classList.add("text");
    text.innerHTML =`
        <h3>Nandhabhavan Kalyan</h3>
        <p>Register No: 921520104016</p>
    `;

    const details = document.createElement("div");
    details.classList.add("details");
    details.innerHTML =`
        <p>Standard: 12th</p>
        <p>Section: A</p>
        <p>Department: CSE</p>
        <p>EMIS: 921520104016273</p>
    `;

    const details2 = document.createElement("div");
    details2.classList.add("details2");
    details2.innerHTML =`
        <p>Father Name: Sathiyamoorthy</p>
        <p>Father Occupation: Import & Export Business</p>
        <p>Mother Name: Pothumani </p>
        <p>Mother Occupation: House Wife</p>
    `;

    const details3 = document.createElement("div");
    details3.classList.add("details");
    details3.innerHTML =`
        <p>Phone Number 1: +91 6381378483</p>
        <p>Phone Number 2: +91 6381378483</p>
    `;

    const details4 = document.createElement("div");
    details4.classList.add("details2");
    details4.innerHTML =`
        <p>Student Aadhar: 9834296381378483</p>
        <p>Community & Caste: BC & Agamudayar</p>
    `;

    const details5 = document.createElement("div");
    details5.classList.add("details");
    details5.innerHTML =`
        <p>Quota:</p>
        <p>Management Quota</p>
    `;

    const details6 = document.createElement("div");
    details6.classList.add("details2");
    details6.innerHTML =`
        <p>Fees:</p>
        <p>Paid:</p>
    `;

    const details7 = document.createElement("div");
    details7.classList.add("details");
    details7.innerHTML =`
        <p>Documents Submitted:</p>
        <p>Aadhar, Marksheet 10th, Marksheet 12th,</p>
        <p>Marksheet 10th, Marksheet 12th, Marksheet 11th</p>
    `;

    const details8 = document.createElement("div");
    details8.classList.add("details2");
    details8.innerHTML =`
        <p>Address:</p>
        <p>Aadhar, Marksheet 10th, Marksheet 12th,</p>
        <p>Marksheet 10th, Marksheet 12th, Marksheet 11th</p>
    `;

    const class2 = document.createElement("div");
    class2.classList.add("column-md-12", "text-center");
    class2.innerHTML = `
        <p><a class="btn btn-primary">Save</a></p> 
    `;

    class1.appendChild(button);
    class1.appendChild(media);
    class1.appendChild(text);
    class1.appendChild(details);
    class1.appendChild(details2);
    class1.appendChild(details3);
    class1.appendChild(details4);
    class1.appendChild(details5);
    class1.appendChild(details6);
    class1.appendChild(details7);
    class1.appendChild(details8);
    class1.appendChild(class2);
    row.appendChild(class1);
    container.appendChild(row);
    section.appendChild(container);
    sectionParStudent.appendChild(section);
    blockPointerEvents(sectionId);
}

function ParEmployeeData(sectionId){
    const section = document.createElement("section");
    section.id = sectionId;
    section.classList.add("pb-section");

    const container = document.createElement("div");
    container.classList.add("container");

    const row = document.createElement("div");
    row.classList.add("row");
    
    const class1 = document.createElement("div");
    class1.classList.add("pb-educator", "text-center");

    const button = document.createElement("button");
    button.classList.add("item-4");
    button.addEventListener("click", function() {
        removeSection(sectionId);
    });

    const media = document.createElement("figure");
    media.classList.add("media");
    media.innerHTML =`
        <img src="img/Educators/Nandhabhavan.jpg" class="img-responsive">
    `;

    const text = document.createElement("div");
    text.classList.add("text");
    text.innerHTML =`
        <h3>Nandhabhavan Kalyan</h3>
        <p>ID: 921520104016</p>
    `;

    const details = document.createElement("div");
    details.classList.add("details");
    details.innerHTML =`
        <p>Standard: 12th</p>
        <p>Section: A</p>
        <p>Department: CSE</p>
        <p>EMIS: 921520104016273</p>
    `;

    const details2 = document.createElement("div");
    details2.classList.add("details2");
    details2.innerHTML =`
        <p>Father Name: Sathiyamoorthy</p>
        <p>Father Occupation: Import & Export Business</p>
        <p>Mother Name: Pothumani </p>
        <p>Mother Occupation: House Wife</p>
    `;

    const details3 = document.createElement("div");
    details3.classList.add("details");
    details3.innerHTML =`
        <p>Phone Number 1: +91 6381378483</p>
        <p>Phone Number 2: +91 6381378483</p>
    `;

    const details4 = document.createElement("div");
    details4.classList.add("details2");
    details4.innerHTML =`
        <p>Student Aadhar: 9834296381378483</p>
        <p>Community & Caste: BC & Agamudayar</p>
    `;

    const details5 = document.createElement("div");
    details5.classList.add("details");
    details5.innerHTML =`
        <p>Quota:</p>
        <p>Management Quota</p>
    `;

    const details6 = document.createElement("div");
    details6.classList.add("details2");
    details6.innerHTML =`
        <p>Fees:</p>
        <p>Paid:</p>
    `;

    const details7 = document.createElement("div");
    details7.classList.add("details");
    details7.innerHTML =`
        <p>Documents Submitted:</p>
        <p>Aadhar, Marksheet 10th, Marksheet 12th,</p>
        <p>Marksheet 10th, Marksheet 12th, Marksheet 11th</p>
    `;

    const details8 = document.createElement("div");
    details8.classList.add("details2");
    details8.innerHTML =`
        <p>Address:</p>
        <p>Aadhar, Marksheet 10th, Marksheet 12th,</p>
        <p>Marksheet 10th, Marksheet 12th, Marksheet 11th</p>
    `;

    const class2 = document.createElement("div");
    class2.classList.add("column-md-12", "text-center");
    class2.innerHTML = `
        <p><a class="btn btn-primary">Save</a></p> 
    `;

    class1.appendChild(button);
    class1.appendChild(media);
    class1.appendChild(text);
    class1.appendChild(details);
    class1.appendChild(details2);
    class1.appendChild(details3);
    class1.appendChild(details4);
    class1.appendChild(details5);
    class1.appendChild(details6);
    class1.appendChild(details7);
    class1.appendChild(details8);
    class1.appendChild(class2);
    row.appendChild(class1);
    container.appendChild(row);
    section.appendChild(container);
    sectionParEmployee.appendChild(section);
    blockPointerEvents(sectionId);
}

// Function to block pointer events outside the specified section
function blockPointerEvents(sectionId) {
    // Select all elements except the specified section and set pointer-events to none
    const elementsToBlock = document.querySelectorAll(`:not(#${sectionId})`);
    elementsToBlock.forEach(element => {
        element.style.pointerEvents = 'none';
    });
}

// Function to restore pointer events outside the specified section
function restorePointerEvents(sectionId) {
    // Select all elements except the specified section and restore pointer-events to auto
    const elementsToRestore = document.querySelectorAll(`:not(#${sectionId})`);
    elementsToRestore.forEach(element => {
        element.style.pointerEvents = 'auto';
    });
}

function removeSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.remove();
        // Restore pointer events outside the section
        restorePointerEvents(sectionId);
    }
}

document.getElementById('showDivision1').addEventListener('click', function() {
    document.getElementById('division1').style.display = 'block';
    document.getElementById('division2').style.display = 'none';
});

document.getElementById('showDivision2').addEventListener('click', function() {
    document.getElementById('division1').style.display = 'none';
    document.getElementById('division2').style.display = 'block';
});

// standard and profession choosing

$('.stand-pic').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
        if ($this.children('option').eq(i).is(':selected')){
          $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected')
        }
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
      $list.find('li.is-selected').removeClass('is-selected');
      $list.find('li[rel="' + $(this).attr('rel') + '"]').addClass('is-selected');
        $list.hide();
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});

// Student Document choosing

$(document).ready(function() {

    var select = $('.stu-doc');
    var options = select.find('option');

    var div = $('<div />').addClass('selectMultiple');
    var active = $('<div />');
    var list = $('<ul />');
    var placeholder = select.data('placeholder');

    var span = $('<span />').text(placeholder).appendTo(active);

    options.each(function() {
        var text = $(this).text();
        if($(this).is(':selected')) {
            active.append($('<a />').html('<em>' + text + '</em><i></i>'));
            span.addClass('hide');
        } else {
            list.append($('<li />').html(text));
        }
    });

    active.append($('<div />').addClass('arrow'));
    div.append(active).append(list);

    select.wrap(div);

    // Open options when clicking select area
    $(document).on('click', '.selectMultiple > div, .selectMultiple > div .arrow, .selectMultiple select', function(e) {
        $(this).parent().toggleClass('open');
    });

    // Handle selection of options
    $(document).on('click', '.selectMultiple ul li', function(e) {
        var select = $(this).parent().parent();
        var li = $(this);
        if(!select.hasClass('clicked')) {
            select.addClass('clicked');
            li.prev().addClass('beforeRemove');
            li.next().addClass('afterRemove');
            li.addClass('remove');
            var a = $('<a />').addClass('notShown').html('<em>' + li.text() + '</em><i></i>').hide().appendTo(select.children('div'));
            a.slideDown(400, function() {
                setTimeout(function() {
                    a.addClass('shown');
                    select.children('div').children('span').addClass('hide');
                    select.find('option:contains(' + li.text() + ')').prop('selected', true);
                }, 500);
            });
            setTimeout(function() {
                if(li.prev().is(':last-child')) {
                    li.prev().removeClass('beforeRemove');
                }
                if(li.next().is(':first-child')) {
                    li.next().removeClass('afterRemove');
                }
                setTimeout(function() {
                    li.prev().removeClass('beforeRemove');
                    li.next().removeClass('afterRemove');
                }, 200);

                li.slideUp(400, function() {
                    li.remove();
                    select.removeClass('clicked');
                });
            }, 600);
        }
    });

    // Handle deselection of options
    $(document).on('click', '.selectMultiple > div a', function(e) {
        var select = $(this).parent().parent();
        var self = $(this);
        self.removeClass().addClass('remove');
        select.addClass('open');
        setTimeout(function() {
            self.addClass('disappear');
            setTimeout(function() {
                self.animate({
                    width: 0,
                    height: 0,
                    padding: 0,
                    margin: 0
                }, 300, function() {
                    var li = $('<li />').text(self.children('em').text()).addClass('notShown').appendTo(select.find('ul'));
                    li.slideDown(400, function() {
                        li.addClass('show');
                        setTimeout(function() {
                            select.find('option:contains(' + self.children('em').text() + ')').prop('selected', false);
                            if(!select.find('option:selected').length) {
                                select.children('div').children('span').removeClass('hide');
                            }
                            li.removeClass();
                        }, 400);
                    });
                    self.remove();
                })
            }, 300);
        }, 400);
    });

});

// Employee Document Choosing
$(document).ready(function() {

    var select = $('.emp-doc');
    var options = select.find('option');

    var div = $('<div />').addClass('selectMultiple');
    var active = $('<div />');
    var list = $('<ul />');
    var placeholder = select.data('placeholder');

    var span = $('<span />').text(placeholder).appendTo(active);

    options.each(function() {
        var text = $(this).text();
        if($(this).is(':selected')) {
            active.append($('<a />').html('<em>' + text + '</em><i></i>'));
            span.addClass('hide');
        } else {
            list.append($('<li />').html(text));
        }
    });

    active.append($('<div />').addClass('arrow'));
    div.append(active).append(list);

    select.wrap(div);

    // Open options when clicking select area
    $(document).on('click', 'select', '.selectMultiple > div, .selectMultiple > div .arrow, .selectMultiple select', function(e) {
        $(this).parent().toggleClass('open');
    });

    // Handle selection of options
    $(document).on('click', '.selectMultiple ul li', function(e) {
        var select = $(this).parent().parent();
        var li = $(this);
        if(!select.hasClass('clicked')) {
            select.addClass('clicked');
            li.prev().addClass('beforeRemove');
            li.next().addClass('afterRemove');
            li.addClass('remove');
            var a = $('<a />').addClass('notShown').html('<em>' + li.text() + '</em><i></i>').hide().appendTo(select.children('div'));
            a.slideDown(400, function() {
                setTimeout(function() {
                    a.addClass('shown');
                    select.children('div').children('span').addClass('hide');
                    select.find('option:contains(' + li.text() + ')').prop('selected', true);
                }, 500);
            });
            setTimeout(function() {
                if(li.prev().is(':last-child')) {
                    li.prev().removeClass('beforeRemove');
                }
                if(li.next().is(':first-child')) {
                    li.next().removeClass('afterRemove');
                }
                setTimeout(function() {
                    li.prev().removeClass('beforeRemove');
                    li.next().removeClass('afterRemove');
                }, 200);

                li.slideUp(400, function() {
                    li.remove();
                    select.removeClass('clicked');
                });
            }, 600);
        }
    });

    // Handle deselection of options
    $(document).on('click', '.selectMultiple > div a', function(e) {
        var select = $(this).parent().parent();
        var self = $(this);
        self.removeClass().addClass('remove');
        select.addClass('open');
        setTimeout(function() {
            self.addClass('disappear');
            setTimeout(function() {
                self.animate({
                    width: 0,
                    height: 0,
                    padding: 0,
                    margin: 0
                }, 300, function() {
                    var li = $('<li />').text(self.children('em').text()).addClass('notShown').appendTo(select.find('ul'));
                    li.slideDown(400, function() {
                        li.addClass('show');
                        setTimeout(function() {
                            select.find('option:contains(' + self.children('em').text() + ')').prop('selected', false);
                            if(!select.find('option:selected').length) {
                                select.children('div').children('span').removeClass('hide');
                            }
                            li.removeClass();
                        }, 400);
                    });
                    self.remove();
                })
            }, 300);
        }, 400);
    });

});


form.addEventListener("submit", (e) => {
    e.preventDefault();

    form.reset();
    return false;
});
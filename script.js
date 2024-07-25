function toggleChapter(subjectId) {
        // Hide all chapters
        document.querySelectorAll('.chapter').forEach(chapter => {
            chapter.classList.remove('active');
        });

        // Show the chapters for the selected subject
        document.getElementById(subjectId).classList.add('active');
    }

    function toggleSubtopic(subtopicId) {
        // Hide all subtopics
        document.querySelectorAll('.subtopic').forEach(subtopic => {
            subtopic.style.display = 'none';
        });

        // Show the selected subtopic
        document.getElementById(subtopicId).style.display = 'block';
    }